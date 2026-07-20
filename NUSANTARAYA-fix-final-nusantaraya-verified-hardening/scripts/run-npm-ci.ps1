$runId = (Get-Date).ToUniversalTime().ToString("yyyyMMdd-HHmmssZ") + "-" + (git rev-parse --short HEAD) + "-phase0-final"
$baseDir = "reports\baseline\phase-0\$runId"
New-Item -ItemType Directory -Force "$baseDir\commands" | Out-Null
New-Item -ItemType Directory -Force "$baseDir\logs" | Out-Null
New-Item -ItemType Directory -Force "$baseDir\screenshots" | Out-Null
New-Item -ItemType Directory -Force "$baseDir\browser" | Out-Null

$hashBefore = (Get-FileHash package-lock.json -Algorithm SHA256).Hash
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

$startTime = (Get-Date).ToUniversalTime().ToString("o")
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()

$process = Start-Process -FilePath "npm.cmd" -ArgumentList "ci" -NoNewWindow -Wait -PassThru -RedirectStandardOutput "$baseDir\logs\npm-ci.log" -RedirectStandardError "$baseDir\logs\npm-ci-err.log"

$stopwatch.Stop()
$endTime = (Get-Date).ToUniversalTime().ToString("o")
$exitCode = $process.ExitCode
$status = if ($exitCode -eq 0) { "PASS" } else { "FAIL" }

if (Test-Path "$baseDir\logs\npm-ci-err.log") {
    Add-Content -Path "$baseDir\logs\npm-ci.log" -Value (Get-Content "$baseDir\logs\npm-ci-err.log" -Raw -ErrorAction SilentlyContinue)
}

$metadata = @{
    command = "npm ci"
    startedAt = $startTime
    finishedAt = $endTime
    durationMs = $stopwatch.ElapsedMilliseconds
    exitCode = $exitCode
    status = $status
    logFile = "logs/npm-ci.log"
}
$metadata | ConvertTo-Json | Set-Content "$baseDir\commands\npm-ci.json"

$hashAfter = (Get-FileHash package-lock.json -Algorithm SHA256).Hash

Write-Output "HashBefore: $hashBefore"
Write-Output "HashAfter: $hashAfter"
Write-Output "RunID: $runId"

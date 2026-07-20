const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('src/components/archive/ArchiveMosaic.tsx');

let content = fs.readFileSync(targetPath, 'utf8');

// Replace the grid container and item mapping
const oldGridBlockRegex = /\{\/\* Grid \*\/\}([\s\S]*?)\{\/\* Pagination \/ Load More \*\/\}/;

const newGridBlock = `{/* Bento Grid */}
        <div className={
          viewMode === "editorial" 
            ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense gap-4 md:gap-5 lg:gap-6 auto-rows-[280px] lg:auto-rows-[320px]"
            : "flex flex-col gap-4"
        }>
          {items.map((item, index) => {
            
            // Abstract Bento Grid Mapping Logic
            // We create a perfectly tileable 6-item block for 4 columns
            let layoutType: "large" | "tall" | "wide" | "standard" = "standard";
            let spanClass = "";
            
            if (viewMode === "editorial") {
              const pos = index % 6;
              if (pos === 0) {
                layoutType = "large";
                spanClass = "md:col-span-2 md:row-span-2";
              } else if (pos === 1) {
                layoutType = "tall";
                spanClass = "md:col-span-1 md:row-span-2";
              } else if (pos === 2) {
                layoutType = "standard";
                spanClass = "md:col-span-1 md:row-span-1";
              } else if (pos === 3) {
                layoutType = "standard";
                spanClass = "md:col-span-1 md:row-span-1";
              } else if (pos === 4) {
                layoutType = "wide";
                spanClass = "md:col-span-2 md:row-span-1";
              } else if (pos === 5) {
                layoutType = "wide";
                spanClass = "md:col-span-2 md:row-span-1";
              }
            }
            
            return (
              <div 
                key={item.id} 
                className={spanClass}
              >
                <ArchiveItemCard
                  item={item}
                  viewMode={viewMode}
                  layoutType={layoutType}
                  onOpenQuickView={() => onOpenQuickView(item.id)}
                  t={t}
                  language={language}
                />
              </div>
            );
          })}
        </div>

        `;

content = content.replace(oldGridBlockRegex, newGridBlock);

fs.writeFileSync(targetPath, content);
console.log('ArchiveMosaic.tsx successfully updated with Bento Grid layout logic!');

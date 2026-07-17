import React from "react";
import { RouteSectionKey, getRouteSectionHref } from "@/lib/routes/routeSections";
import { navigateToRouteSection } from "@/lib/routes/navigateToRouteSection";

interface RouteSectionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  section: RouteSectionKey;
  onNavigate?: () => void;
}

export function RouteSectionLink({ section, onNavigate, onClick, children, ...props }: RouteSectionLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate();
    }
    // if there is an onNavigate (e.g. close menu), wait for state update before scroll
    if (onNavigate) {
      requestAnimationFrame(() => {
        navigateToRouteSection(section);
      });
    } else {
      navigateToRouteSection(section);
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={getRouteSectionHref(section)} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

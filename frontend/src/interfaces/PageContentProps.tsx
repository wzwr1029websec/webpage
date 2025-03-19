import { JSX } from "react";

export interface PageContentProps {
    subMenuName: string;
    subMenuIcon: JSX.Element;
    currentName: string;
    currentIcon: JSX.Element;
    element: JSX.Element;
    description: string;
}
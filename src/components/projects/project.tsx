import { UiProject } from "@/src/lib/types/project";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../ui/item";
import { Button } from "../ui/button";

export function Project({ uiProject }: { uiProject: UiProject }) {
  const { project, style } = uiProject;

  return (
    <Item variant="outline" className={`md:w-40 w-32 ${style}`}>
      <ItemContent>
        <ItemTitle>{project.title}</ItemTitle>
        <ItemDescription>{project.description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline">Action</Button>
      </ItemActions>
    </Item>
  );
}

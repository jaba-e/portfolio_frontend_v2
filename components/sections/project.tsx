import { projects } from "@/static/constants";
import { MobileTitle } from "../mobileTitle";
import { MediumCard } from "../mediumCard";
import { Divider } from "../divider";

export default function Project() {
  return (
    <>
      <MobileTitle text={"Projects"} />
      <div className="mx-auto max-w-screen-md">
        {projects.map((project, i) => (
          <div key={project.id}>
            <MediumCard data={project} />
            {i < projects.length - 1 && <Divider key={project.id} />}
          </div>
        ))}
      </div>
    </>
  );
}

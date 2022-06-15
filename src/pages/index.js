import { ExamDetails } from "../component/examDetails/ExamDetails";
import { SideMenu } from "../component/sideMenu/SideMenu";

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <SideMenu />
      <ExamDetails />
    </div>
  );
}

import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

const WorkSpaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");
  return <div>WorkSpaceId</div>;
};

export default WorkSpaceIdPage;

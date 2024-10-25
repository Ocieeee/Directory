import { createSessionClient } from "@/lib/appwrite";
import { getMember } from "../members/util";
import { DATABASE_ID, PROJECT_ID, } from "@/config";
import { Project } from "./type";

interface GetProjectProps {
    projectId: string

}
export const getProject = async ({ projectId }: GetProjectProps) => {

    const { databases, account } = await createSessionClient()
    const user = await account.get()

    const project = await databases.getDocument<Project>(
        DATABASE_ID,
        PROJECT_ID,
        projectId,
    )
    const member = await getMember({
        databases,
        userId: user.$id,
        workspaceId: project.workspaceId
    })

    if (!member) {
        throw new Error("Unauthorized")
    }

    return project;

};
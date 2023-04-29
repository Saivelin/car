import UserMain from "@/components/UserMain";
import UserPageAddAnnouncement from "@/components/UserPageAddAnnouncement";
import { useRouter } from "next/router";

const Users = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div className="userMain">
            <UserMain />
            <UserPageAddAnnouncement />
        </div>
    );
};

export default Users;
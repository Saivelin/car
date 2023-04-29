import UserMain from "@/components/UserMain";
import UserPageAddAnnouncement from "@/components/UserPageAddAnnouncement";
import YourAnnouncement from "@/components/YourAnnouncement";
import { useRouter } from "next/router";

const Users = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div className="userMain">
            <UserMain />
            <UserPageAddAnnouncement />
            <YourAnnouncement />
        </div>
    );
};

export default Users;
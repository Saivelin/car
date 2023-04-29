import UserMain from "@/components/UserMain";
import UserPageAddAnnouncement from "@/components/UserPageAddAnnouncement";
import YourAnnouncement from "@/components/YourAnnouncement";
import { useRouter } from "next/router";
import CatalogTiles from "@/components/CatalogTiles";

const Users = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div>
            <div className="userMain">
                <UserMain />
                <UserPageAddAnnouncement />
                <YourAnnouncement />
            </div>
            <div className="userAnnouncements">
                <CatalogTiles />
            </div>
        </div>
    );
};

export default Users;
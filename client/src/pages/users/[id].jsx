import UserMain from "@/components/UserMain";
import UserPageAddAnnouncement from "@/components/UserPageAddAnnouncement";
import YourAnnouncement from "@/components/YourAnnouncement";
import { useRouter } from "next/router";
import CatalogTiles from "@/components/CatalogTiles";
import { getInfo } from "@/http/userAPI";

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const response = await getInfo(id)

    return {
        props: { userInf: response }
    }
}

const Users = ({ userInf }) => {
    console.log(userInf)
    return (
        <div>
            <div className="userMain">
                <UserMain userInf={userInf.user} />
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
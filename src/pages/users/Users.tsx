import Sidenavbar from "@/components/ui/Sidenavbar";

const Users = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-black text-white flex">
        <Sidenavbar />
        {/* main page */}
        <div className="p-8 w-full">Users</div>
      </div>
    </>
  );
};

export default Users;

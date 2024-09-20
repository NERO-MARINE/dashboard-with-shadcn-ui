import PageTitle from "@/components/PageTitle";
import Sidenavbar from "@/components/ui/Sidenavbar";

const Settings = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-black text-white flex">
        <Sidenavbar />

        <div className="p-8 w-full">
          <PageTitle title="Settings" />
          Settings
        </div>
      </div>
    </>
  );
};

export default Settings;

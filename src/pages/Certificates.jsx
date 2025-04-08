import { Certificate, PageTitle } from "../components/components.js";
import { containerStyle } from "./styles.js";
import { MachinesPage } from "../assets/assets.js";

const Certificates = () => {
  return (
    <>
      {MachinesPage && MachinesPage.length > 0 && (
        <div id="Makineler" className={`${containerStyle}`}>
          <PageTitle title={"Makinelerimiz"} />
          <div className="bg-[#1f1f1f] border-4 border-yellow-500 rounded-xl px-4 py-6 shadow-xl">
            <div className="flex gap-4 flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar">
              {MachinesPage.map(
                ({ img, title, description, issuedBy, credentialURL }, index) => (
                  <Certificate
                    key={index}
                    isFlexShrink={true}
                    img={img}
                    title={title}
                    description={description}
                    issuedBy={issuedBy}
                    credentialURL={credentialURL}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;

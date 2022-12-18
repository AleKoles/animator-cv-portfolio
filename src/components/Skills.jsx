import React from "react";

const Skills = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-between"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto">
              <a
                className={
                  "text-xl md:text-2xl font-bold mb-10" +
                  (openTab === 1
                    ? "text-black border-b-4 border-dark-blue"
                    : "text-gray-600 dark:text-gray-200")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Software skills
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto">
              <a
                className={
                  "text-xl md:text-2xl font-bold mb-10" +
                  (openTab === 2
                    ? "text-black border-b-4 border-dark-blue"
                    : "text-gray-600 dark:text-gray-200")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Languages
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ul className="flex flex-row flex-wrap justify-center gap-4">
                    <li>After Effects</li>
                    <li>Photoshop</li>
                    <li>Blender</li>
                    <li>ZBrush</li>
                    <li>Maya</li>
                    <li>Marmoset</li>
                    <li>Substance</li>
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ul className="flex flex-col gap-4">
                    <li>Ukrainian/Russian - NATIVE</li>
                    <li>English - C1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

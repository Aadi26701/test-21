import { FunctionComponent, useCallback } from "react";
import styles from "./Technologies.module.css";

const Technologies: FunctionComponent = () => {
  const onFrameContainer26Click = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  return (
    <div className={styles.technologies}>
      <div className={styles.headerFrame}>
        <div className={styles.topHeader}>
          <img
            className={styles.topHeaderChild}
            alt=""
            src="../../public/group-45.svg"
          />
          <div className={styles.menuParent}>
            <div className={styles.menu}>Menu</div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
            </div>
          </div>
        </div>
        <div className={styles.textGroup}>
          <div className={styles.weAlwaysRemainContainer}>
            <span>{`We Always remain updated & reuse latest version of `}</span>
            <span className={styles.entertaine}>Technologies</span>
          </div>
          <div className={styles.loremIpsumIs}>
            Lorem ipsum is dummy text thta ia ued to present osme tinf s usbdf
            jn the purpose is easy to exlain that is fineLorem ipsum is dummy
            text thta ia ued to present osme tinf s usbdf jn the purpose is easy
            to exlain that is fine
          </div>
        </div>
      </div>
      <div className={styles.getToKnowSection}>
        <div className={styles.frameParent}>
          <div className={styles.groupParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild1} />
            </div>
            <div className={styles.getToKnow}>Get To Know</div>
          </div>
          <div className={styles.weKnowHowToEntertaineServParent}>
            <div className={styles.weKnowHowContainer}>
              <span>{`We know how to `}</span>
              <span className={styles.entertaine}>entertaine</span>
              <span> servies fast</span>
            </div>
            <div className={styles.loremIpsumIs1}>
              Lorem ipsum is dummy text thta ia ued to present osme tinf s usbdf
              jn the purpose is easy to exlain that is fineLorem ipsum is dummy
              text thta ia ued to present osme tinf s usbdf jn the purpose is
              easy to exlain that is fine
            </div>
          </div>
        </div>
        <img
          className={styles.image23Icon}
          alt=""
          src="../../public/image-23@2x.png"
        />
      </div>
      <div className={styles.toolsSection}>
        <div
          className={styles.worksWithThe}
        >{`Works with the all the tools to work professionally `}</div>
      </div>
      <div className={styles.technologiesSection}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild} />
            <div className={styles.knowAboutTechnologies}>
              Know About Technologies
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.meetTheFeatureOfAppParent}>
            <div className={styles.meetTheFeatureContainer}>
              <span>{`We always use Latest `}</span>
              <span className={styles.entertaine}>Technologies</span>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.dropdownButton}>
                <div className={styles.frameContainer}>
                  <div className={styles.iconParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="../../public/icon.svg"
                    />
                    <div className={styles.webDevelopment}>Web Development</div>
                  </div>
                  <img
                    className={styles.downArrowIcon}
                    alt=""
                    src="../../public/down-arrow.svg"
                  />
                </div>
                <div className={styles.dropdownPanel}>
                  <div className={styles.dropdownPanelChild} />
                  <div className={styles.groupContainer}>
                    <div className={styles.webDevelopmentParent}>
                      <div className={styles.webDevelopment1}>
                        Web Development
                      </div>
                      <img
                        className={styles.webDevelopemtnIcon}
                        alt=""
                        src="../../public/web-developemtn.svg"
                      />
                    </div>
                    <div className={styles.mobileAppDevelopmentParent}>
                      <div className={styles.mobileAppDevelopment}>
                        Mobile App Development
                      </div>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="../../public/group-2390.svg"
                      />
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.netDevelopmentWrapper}>
                        <div className={styles.netDevelopment}>
                          .Net Development
                        </div>
                      </div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="../../public/vector.svg"
                      />
                    </div>
                    <div className={styles.graphicsDesigningParent}>
                      <div className={styles.graphicsDesigning}>
                        Graphics Designing
                      </div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="../../public/vector1.svg"
                      />
                    </div>
                    <div className={styles.softwareQualityAssuranceParent}>
                      <div className={styles.softwareQualityAssurance}>
                        Software Quality Assurance
                      </div>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="../../public/vector2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backendDevelopmentParent}>
          <div className={styles.backendDevelopment}>
            <div className={styles.backendDevelopment1}>
              Backend Development
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.groupParent1}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="../../public/group-2347.svg"
                />
                <div className={styles.laravel}>Laravel</div>
              </div>
              <div className={styles.groupParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../../public/group-2348.svg"
                />
                <div className={styles.laravel}>Codeigniter</div>
              </div>
              <div className={styles.groupParent3}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="../../public/group-2350.svg"
                />
                <div className={styles.laravel}>NodeJS</div>
              </div>
            </div>
          </div>
          <div className={styles.frontEndDevelopmentParent}>
            <div className={styles.frontEndDevelopment}>
              Front-end Development
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.groupParent4}>
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="../../public/group-2351.svg"
                />
                <div className={styles.laravel}>React JS</div>
              </div>
              <div className={styles.groupParent5}>
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="../../public/group-2352.svg"
                />
                <div className={styles.laravel}>Angular JS</div>
              </div>
              <div className={styles.groupParent6}>
                <img
                  className={styles.frameChild5}
                  alt=""
                  src="../../public/group-2353.svg"
                />
                <div className={styles.laravel}>HTML</div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../../public/vector3.svg"
                />
                <div className={styles.laravel}>CSS</div>
              </div>
            </div>
          </div>
          <div className={styles.contentManagementSystemCmsParent}>
            <div className={styles.contentManagementSystem}>
              Content Management System (CMS)
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../../public/frame.svg"
                />
                <div className={styles.laravel}>Wordpress</div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="../../public/group-2356.svg"
                />
                <div className={styles.laravel}>Shopify</div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="../../public/vector4.svg"
                />
                <div className={styles.laravel}>Magenta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.growingStrategiesSection}>
        <div className={styles.growingStrategiesHeader}>
          <div className={styles.groupParent5}>
            <div className={styles.frameChild} />
            <div className={styles.knowAboutTechnologies}>
              Growing Stratgies
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.meetTheFeatureContainer1}>
            <span>{`How we always stay `}</span>
            <span className={styles.entertaine}>updated</span>
          </div>
        </div>
        <div className={styles.stepsRow}>
          <div className={styles.column12}>
            <div className={styles.div}>
              <div className={styles.group}>
                <img
                  className={styles.roundedRectangle528Copy}
                  alt=""
                  src="../../public/rounded-rectangle-528-copy.svg"
                />
                <div className={styles.fastPerformance}>01</div>
              </div>
              <div className={styles.collaborateWithOur}>
                Collaborate with our research team
              </div>
              <div className={styles.loremIpsumIs2}>
                Lorem ipsum is dummy text thta ia ued to present osme tinf s
                usbdf jn the
              </div>
              <img
                className={styles.arrowIcon}
                alt=""
                src="../../public/arrow.svg"
              />
            </div>
            <div className={styles.div}>
              <div className={styles.group}>
                <img
                  className={styles.roundedRectangle528Copy}
                  alt=""
                  src="../../public/rounded-rectangle-528-copy1.svg"
                />
                <div className={styles.fastPerformance}>02</div>
              </div>
              <div className={styles.assemnleAllThe}>
                Assemnle all the information
              </div>
              <div
                className={styles.loremIpsumIs2}
              >{`Lorem ipsum is dummy text thta ia ued to present osme tinf s usbdf jn the purpose is `}</div>
              <img
                className={styles.arrowIcon1}
                alt=""
                src="../../public/arrow1.svg"
              />
            </div>
          </div>
          <div className={styles.column12}>
            <div className={styles.div}>
              <div className={styles.group}>
                <img
                  className={styles.roundedRectangle528Copy}
                  alt=""
                  src="../../public/rounded-rectangle-528-copy2.svg"
                />
                <div className={styles.fastPerformance}>03</div>
              </div>
              <div className={styles.assemnleAllThe}>
                <p className={styles.makeDecisions}>Make decisions</p>
                <p className={styles.withTeamHeads}>with team Heads</p>
              </div>
              <div className={styles.loremIpsumIs2}>
                Lorem ipsum is dummy text thta ia ued to present osme tinf s
                usbdf jn the purpos
              </div>
              <img
                className={styles.arrowIcon2}
                alt=""
                src="../../public/arrow.svg"
              />
            </div>
            <div className={styles.div}>
              <div className={styles.group}>
                <img
                  className={styles.roundedRectangle528Copy}
                  alt=""
                  src="../../public/rounded-rectangle-528-copy3.svg"
                />
                <div className={styles.fastPerformance}>04</div>
              </div>
              <div className={styles.implementTheLatest}>
                Implement the latest technologies
              </div>
              <div className={styles.loremIpsumIs2}>
                Lorem ipsum is dummy text thta ia ued to present osme tinf s
                usbdf jn
              </div>
              <img
                className={styles.arrowIcon3}
                alt=""
                src="../../public/arrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactCta}>
        <div className={styles.text}>
          <b className={styles.readyToGet}>Wanna talk to Expert?</b>
          <div
            className={styles.pellentesqueAcBibe}
          >{`n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual `}</div>
        </div>
        <img
          className={styles.arrowIcon4}
          alt=""
          src="../../public/arrow4.svg"
        />
        <div className={styles.letsGoParent} onClick={onFrameContainer26Click}>
          <div className={styles.letsGo}>Let’s Go</div>
          <img
            className={styles.frameChild9}
            alt=""
            src="../../public/arrow-1.svg"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent4}>
          <div className={styles.groupWrapper}>
            <div className={styles.companyParent}>
              <div className={styles.company}>Company</div>
              <div className={styles.aboutUs}>About us</div>
              <div className={styles.iots}>iOT’s</div>
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.faqs}>FAQ’s</div>
              <div className={styles.polygonParent}>
                <img
                  className={styles.polygonIcon}
                  alt=""
                  src="../../public/polygon-1.svg"
                />
                <div className={styles.laravel}>Incubator</div>
              </div>
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.resourcesParent}>
              <div className={styles.resources}>Resources</div>
              <div className={styles.servicesParent}>
                <div className={styles.laravel}>Services</div>
                <div className={styles.laravel}>Products</div>
                <div className={styles.laravel}>Projects</div>
                <div className={styles.laravel}>Technologies</div>
                <div className={styles.laravel}>Moderen patterns</div>
              </div>
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.featuresParent}>
              <div className={styles.resources}>Features</div>
              <div className={styles.servicesParent}>
                <div className={styles.laravel}>Hire a team</div>
                <div className={styles.laravel}>Careers</div>
                <div className={styles.laravel}>Get Hired</div>
                <div className={styles.laravel}>Become a reseller</div>
                <div className={styles.laravel}>Benfits to join</div>
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper2}>
            <div className={styles.vectorContainer}>
              <img
                className={styles.vectorIcon5}
                alt=""
                src="../../public/vector5.svg"
              />
              <img
                className={styles.vectorIcon6}
                alt=""
                src="../../public/vector6.svg"
              />
              <div className={styles.div4}>+92 301 9228383</div>
              <div className={styles.infohwrykcom}>info@hwryk.com</div>
              <div className={styles.rahimYarKhan}>
                Rahim Yar khan, Pakistan
              </div>
              <div className={styles.lahorePakistan}>Lahore, Pakistan</div>
              <img
                className={styles.groupChild2}
                alt=""
                src="../../public/group-43.svg"
              />
              <img
                className={styles.frameIcon1}
                alt=""
                src="../../public/frame1.svg"
              />
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
        </div>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="../../public/mask-group.svg"
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright2016Hello}>
          Copyright 2016 Hello World Technologies. All rights reserved.
        </div>
        <div className={styles.termOfUse}>Term of Use | Privacy Policy</div>
        <img
          className={styles.bottomChild}
          alt=""
          src="../../public/group-41.svg"
        />
      </div>
    </div>
  );
};

export default Technologies;

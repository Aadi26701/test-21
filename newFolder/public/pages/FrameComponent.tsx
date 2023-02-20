import { FunctionComponent, useState } from "react";
import { TextField, Icon, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.autoTagWithLocoaiParent}>
            <div className={styles.autoTagWithLocoaiContainer}>
              <span>{`Auto-tag with `}</span>
              <b>LocoAi</b>
            </div>
            <img
              className={styles.addRectangularCopy30Icon}
              alt=""
              src="../../public/addrectangularcopy30.svg"
            />
          </div>
          <div className={styles.suggestedTagsForContainer}>
            <span>{`Suggested tags for `}</span>
            <b>15 layers</b>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="../../public/vector-14.svg"
            />
            <img
              className={styles.groupItem}
              alt=""
              src="../../public/vector-14.svg"
            />
            <img
              className={styles.groupInner}
              alt=""
              src="../../public/vector-15.svg"
            />
            <div className={styles.notTaggedParent}>
              <div className={styles.notTagged}>Not tagged</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>15</div>
              </div>
            </div>
            <div className={styles.taggedParent}>
              <div className={styles.tagged}>Tagged</div>
              <div className={styles.container}>
                <div className={styles.div}>4</div>
              </div>
            </div>
          </div>
          <div className={styles.showLayersForParent}>
            <div className={styles.showLayersFor}>Show layers for:</div>
            <div className={styles.homePageWrapper}>
              <div className={styles.div}>Home Page</div>
            </div>
            <div className={styles.hotelsPageWrapper}>
              <div className={styles.div}>Hotels Page</div>
            </div>
            <div className={styles.hotelsPageWrapper}>
              <div className={styles.div}>Results Page</div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <button className={styles.button}>
              <div className={styles.button1}>Search flights</div>
            </button>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.groupWrapper}>
              <div className={styles.searchButtonParent}>
                <div className={styles.searchButton}>search button</div>
                <div className={styles.rectangleDiv} />
              </div>
            </div>
            <div className={styles.recommendationsdefault}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blocktextInputIcon}
                  alt=""
                  src="../../public/blocktext-input.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Input</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.matchWrapper}>
                  <div className={styles.match}>89% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-200.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.recommendationsdefault1}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blockbuttonIcon}
                  alt=""
                  src="../../public/blockbutton.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Button</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.matchWrapper}>
                  <div className={styles.match}>98% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-200.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.recommendationsdefault2}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blockselectIcon}
                  alt=""
                  src="../../public/blockselect.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Select</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.matchFrame}>
                  <div className={styles.match}>82% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-200.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.recommendations}>5 Recommendations</div>
            <div className={styles.showMoreParent}>
              <div className={styles.div}>Show more</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="../../public/vector.svg"
              />
            </div>
          </div>
          <div className={styles.lineGroup}>
            <div className={styles.lineDiv} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
            <div className={styles.recommendationsdefault3}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blocktextInputIcon}
                  alt=""
                  src="../../public/blocktext-input1.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Input</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.matchWrapper}>
                  <div className={styles.match}>89% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-2003.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.recommendationsdefault4}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blockdatepickerIcon}
                  alt=""
                  src="../../public/blockdatepicker.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>{`Date & Time...`}</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.matchWrapper}>
                  <div className={styles.match}>97% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-2003.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.selectoutlinedWrapper}>
              <div className={styles.selectoutlined}>
                <DatePicker
                  label="Date"
                  value={selectOutlinedDateTimePickerValue}
                  onChange={(newValue: any) => {
                    setSelectOutlinedDateTimePickerValue(newValue);
                  }}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="outlined"
                      size="medium"
                      renderInput={{ placeholder: "01/05/2022" }}
                      helperText=""
                      fullWidth
                    />
                  )}
                />
              </div>
            </div>
            <div className={styles.datefieldCopyParent}>
              <div className={styles.datefieldCopy}>Datefield copy</div>
              <img
                className={styles.layerAutoLayoutVertical}
                alt=""
                src="../../public/layer--auto-layout-vertical.svg"
              />
            </div>
            <div className={styles.recommendations1}>4 Recommendations</div>
            <div className={styles.recommendationsdefault5}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blockselectIcon}
                  alt=""
                  src="../../public/blockselect1.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Select</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.matchFrame}>
                  <div className={styles.match}>82% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-2003.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.showMoreGroup}>
              <div className={styles.div}>Show more</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="../../public/vector1.svg"
              />
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.frameChild8} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild10} />
            <div className={styles.recommendationsdefault3}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blocktextInputIcon}
                  alt=""
                  src="../../public/blocktext-input1.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Input</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.matchWrapper}>
                  <div className={styles.match}>86% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-2003.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.recommendationsdefault4}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blockautoCompleteIcon}
                  alt=""
                  src="../../public/blockautocomplete.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Auto-complete</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.matchWrapper}>
                  <div className={styles.match}> % Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-2003.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
            <div className={styles.arrivalFieldParent}>
              <div className={styles.arrivalField}>Arrival-field</div>
              <img
                className={styles.layerAutoLayoutVertical}
                alt=""
                src="../../public/layer--auto-layout-vertical.svg"
              />
            </div>
            <div className={styles.selectoutlinedContainer}>
              <Autocomplete
                className={styles.selectoutlined}
                disablePortal
                options={["Singapore (SIN)", "Los Angeles (LA)"]}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Arrival"
                    variant="outlined"
                    placeholder=""
                    helperText=""
                  />
                )}
                defaultValue="Los Angeles (LA)"
                size="medium"
              />
            </div>
            <div className={styles.recommendations2}>5 Recommendations</div>
            <div className={styles.recommendationsdefault5}>
              <div className={styles.blocktextInputParent}>
                <img
                  className={styles.blockselectIcon}
                  alt=""
                  src="../../public/blockselect1.svg"
                />
                <div className={styles.autoCompleteWrapper}>
                  <div className={styles.autoComplete}>Select</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.matchFrame}>
                  <div className={styles.match}>82% Match</div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../../public/group-2003.svg"
                  />
                  <div className={styles.div}>Accept</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plugin15}>
          <div className={styles.searchButtonParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../../public/rectangle.svg"
            />
            <div className={styles.group2}>
              <div className={styles.searchButtonParent}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="../../public/rectangle1.svg"
                />
                <div className={styles.groupChild1} />
                <div className={styles.groupInner1}>
                  <div className={styles.tagManuallyParent}>
                    <div className={styles.tagManually}>Tag Manually</div>
                    <div className={styles.group4}>
                      <div className={styles.group1}>
                        <div className={styles.blockdefaultCopy3}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle2.svg"
                          />
                          <div className={styles.group3}>
                            <div className={styles.file}>File</div>
                            <img
                              className={styles.iconblockbutton}
                              alt=""
                              src="../../public/iconblockbutton.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy5}>
                          <img
                            className={styles.rectangleIcon3}
                            alt=""
                            src="../../public/rectangle3.svg"
                          />
                          <div className={styles.group5}>
                            <div className={styles.notSure}>Not Sure</div>
                            <img
                              className={styles.iconblockbutton1}
                              alt=""
                              src="../../public/iconblockbutton1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy6}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle2.svg"
                          />
                          <div className={styles.group6}>
                            <div className={styles.textarea}>Textarea</div>
                            <img
                              className={styles.iconblockbutton2}
                              alt=""
                              src="../../public/iconblockbutton2.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy12}>
                          <img
                            className={styles.rectangleIcon5}
                            alt=""
                            src="../../public/rectangle5.svg"
                          />
                          <div className={styles.group7}>
                            <div className={styles.video}>Video</div>
                            <img
                              className={styles.iconblockbutton3}
                              alt=""
                              src="../../public/iconblockbutton3.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy7}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group8}>
                            <div className={styles.button2}>Button</div>
                            <img
                              className={styles.iconblockbutton4}
                              alt=""
                              src="../../public/iconblockbutton4.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy8}>
                          <img
                            className={styles.rectangleIcon5}
                            alt=""
                            src="../../public/rectangle7.svg"
                          />
                          <div className={styles.group9}>
                            <div className={styles.image}>Image</div>
                            <img
                              className={styles.iconblockbutton5}
                              alt=""
                              src="../../public/iconblockbutton5.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy4}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group10}>
                            <div className={styles.select}>Select</div>
                            <img
                              className={styles.iconblockbutton6}
                              alt=""
                              src="../../public/iconblockbutton6.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy16}>
                          <img
                            className={styles.rectangleIcon5}
                            alt=""
                            src="../../public/rectangle9.svg"
                          />
                          <div className={styles.group11}>
                            <div className={styles.audio}>Audio</div>
                            <img
                              className={styles.iconblockbutton7}
                              alt=""
                              src="../../public/iconblockbutton7.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle10.svg"
                          />
                          <div className={styles.group12}>
                            <div className={styles.link}>Link</div>
                            <img
                              className={styles.iconblockbutton8}
                              alt=""
                              src="../../public/iconblockbutton8.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy9}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group13}>
                            <div className={styles.form}>Form</div>
                            <img
                              className={styles.iconblockbutton9}
                              alt=""
                              src="../../public/iconblockbutton9.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy17}>
                          <img
                            className={styles.rectangleIcon5}
                            alt=""
                            src="../../public/rectangle12.svg"
                          />
                          <div className={styles.group14}>
                            <div className={styles.container1}>Container</div>
                            <img
                              className={styles.iconblockbutton10}
                              alt=""
                              src="../../public/iconblockbutton10.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy15}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle10.svg"
                          />
                          <div className={styles.group15}>
                            <div className={styles.label}>Label</div>
                            <img
                              className={styles.iconblockbutton11}
                              alt=""
                              src="../../public/iconblockbutton11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy10}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle10.svg"
                          />
                          <div className={styles.group16}>
                            <div className={styles.radio}>Radio</div>
                            <img
                              className={styles.iconblockbutton12}
                              alt=""
                              src="../../public/iconblockbutton12.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy19}>
                          <img
                            className={styles.rectangleIcon15}
                            alt=""
                            src="../../public/rectangle15.svg"
                          />
                          <div className={styles.group17}>
                            <div className={styles.youtube}>YouTube</div>
                            <img
                              className={styles.iconblockbutton13}
                              alt=""
                              src="../../public/iconblockbutton13.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy11}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group18}>
                            <div className={styles.text}>Text</div>
                            <img
                              className={styles.iconblockbutton14}
                              alt=""
                              src="../../public/iconblockbutton14.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy13}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group19}>
                            <div className={styles.input}>Input</div>
                            <img
                              className={styles.iconblockbutton15}
                              alt=""
                              src="../../public/iconblockbutton15.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy20}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group20}>
                            <div className={styles.lottie}>Lottie</div>
                            <img
                              className={styles.iconblockbutton16}
                              alt=""
                              src="../../public/iconblockbutton16.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy14}>
                          <img
                            className={styles.rectangleIcon2}
                            alt=""
                            src="../../public/rectangle6.svg"
                          />
                          <div className={styles.group21}>
                            <div className={styles.video}>Checkbox</div>
                            <img
                              className={styles.iconblockbutton17}
                              alt=""
                              src="../../public/iconblockbutton17.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.blockdefaultCopy21}>
                          <img
                            className={styles.rectangleIcon3}
                            alt=""
                            src="../../public/rectangle20.svg"
                          />
                          <div className={styles.group22}>
                            <div className={styles.image}>iFrame</div>
                            <img
                              className={styles.iconblockbutton18}
                              alt=""
                              src="../../public/iconblockbutton18.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.basicTags}>Basic Tags</div>
                    </div>
                  </div>
                </div>
                <div className={styles.group23}>
                  <div className={styles.group31}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../../public/rectangle21.svg"
                    />
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="../../public/line.svg"
                    />
                    <div className={styles.tagLayers}>Tag Layers</div>
                    <div className={styles.tagYourLayers}>
                      Tag your layers manually or automatically with LocoAi
                    </div>
                    <img
                      className={styles.icontabUp}
                      alt=""
                      src="../../public/icontabup.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.rectangleIcon22}
                    alt=""
                    src="../../public/rectangle22.svg"
                  />
                  <div
                    className={styles.autoTagWithLocoai}
                  >{`Auto-tag with LocoAi `}</div>
                  <div
                    className={styles.forSelectedFrames}
                  >{`for selected frames `}</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.groupChild2} />
                    <img
                      className={styles.ellipseIcon}
                      alt=""
                      src="../../public/ellipse-11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.groupIcon1}
              alt=""
              src="../../public/group.svg"
            />
            <div className={styles.group24}>
              <div className={styles.searchButtonParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="../../public/rectangle23.svg"
                />
                <img
                  className={styles.cilmenuIcon}
                  alt=""
                  src="../../public/cilmenu.svg"
                />
                <div className={styles.dropdownproject}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="../../public/rectangle24.svg"
                  />
                  <div className={styles.nikeLandingPage}>
                    Nike Landing Page Design
                  </div>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="../../public/group1.svg"
                  />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="../../public/group2.svg"
                  />
                </div>
                <div className={styles.dropdownplatform}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="../../public/rectangle25.svg"
                  />
                  <div className={styles.web}>Web</div>
                  <img
                    className={styles.groupIcon4}
                    alt=""
                    src="../../public/group3.svg"
                  />
                  <img
                    className={styles.groupIcon5}
                    alt=""
                    src="../../public/group4.svg"
                  />
                </div>
                <img
                  className={styles.lineIcon1}
                  alt=""
                  src="../../public/line1.svg"
                />
              </div>
            </div>
            <div className={styles.group121}>
              <div className={styles.searchButtonParent}>
                <div className={styles.group31}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="../../public/rectangle26.svg"
                  />
                  <div
                    className={styles.defineBehaviour}
                  >{`Define Behaviour & Responsiveness`}</div>
                  <div className={styles.editYourLayers}>
                    Edit your layer's UX across states and screen sizes
                  </div>
                  <img
                    className={styles.lineIcon2}
                    alt=""
                    src="../../public/line2.svg"
                  />
                  <img
                    className={styles.icontabUp1}
                    alt=""
                    src="../../public/icontabup1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.group26}>
              <div className={styles.searchButtonParent}>
                <div className={styles.group31}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="../../public/rectangle26.svg"
                  />
                  <img
                    className={styles.lineIcon2}
                    alt=""
                    src="../../public/line2.svg"
                  />
                  <div className={styles.defineBehaviour}>Add Actions</div>
                  <div className={styles.editYourLayers}>
                    Add an onClick action to your layer
                  </div>
                  <img
                    className={styles.icontabUp1}
                    alt=""
                    src="../../public/icontabup1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.group27}>
              <div className={styles.searchButtonParent}>
                <div className={styles.group31}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="../../public/rectangle26.svg"
                  />
                  <img
                    className={styles.lineIcon2}
                    alt=""
                    src="../../public/line2.svg"
                  />
                  <div
                    className={styles.dragDrop}
                  >{`Drag & Drop Prebuilt Components`}</div>
                  <div className={styles.addPreBuiltComponents}>
                    Add pre-built components to your Figma file
                  </div>
                  <div className={styles.comingSoon}>(Coming Soon)</div>
                  <img
                    className={styles.icontabUp1}
                    alt=""
                    src="../../public/icontabup1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.group28}>
              <div className={styles.searchButtonParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="../../public/rectangle29.svg"
                />
                <img
                  className={styles.lineIcon5}
                  alt=""
                  src="../../public/line5.svg"
                />
                <div className={styles.group30}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="../../public/rectangle30.svg"
                  />
                  <img
                    className={styles.carboncodeIcon}
                    alt=""
                    src="../../public/carboncode.svg"
                  />
                  <div className={styles.group35}>
                    <div className={styles.autoTagWithLocoaiContainer}>
                      View Code
                    </div>
                  </div>
                </div>
                <div className={styles.group210}>
                  <img
                    className={styles.rectangleCopyIcon}
                    alt=""
                    src="../../public/rectanglecopy.svg"
                  />
                  <img
                    className={styles.triangleIcon}
                    alt=""
                    src="../../public/triangle.svg"
                  />
                  <div className={styles.preview}>Preview</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.group61}>
            <div className={styles.syncFlowNew}>
              <div className={styles.searchButtonParent}>
                <div className={styles.searchButtonParent}>
                  <div className={styles.searchButtonParent}>
                    <div className={styles.group86}>
                      <div className={styles.autoTagWithLocoaiContainer}>
                        Tips
                      </div>
                    </div>
                    <img
                      className={styles.group3Copy4Icon}
                      alt=""
                      src="../../public/group3copy4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent;

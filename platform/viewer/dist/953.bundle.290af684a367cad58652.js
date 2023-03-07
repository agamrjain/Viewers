"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[953],{27953:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(60216),a=n.n(s),r=n(32735),i=n(38942),l=n(78579),o=n(84334),c=n(94709),u=n(12494),d=n(68525);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},m.apply(this,arguments)}const{formatDate:p}=l.ZP,S="@ohif/extension-measurement-tracking",I="SRToolGroup";function g(e){const{children:t,dataSource:n,displaySets:s,viewportIndex:a,viewportLabel:l,servicesManager:g,extensionManager:y}=e,{displaySetService:f,cornerstoneViewportService:h,measurementService:D}=g.services;if(s.length>1)throw new Error("SR viewport should only have a single display set");const b=s[0],[E,v]=(0,u.O_)(),[x,w]=(0,u.en)(),[k,M]=(0,r.useState)(0),[P,U]=(0,r.useState)(1),[N,C]=(0,r.useState)(null),[T,O]=(0,r.useState)(null),[R,A]=(0,r.useState)(b.isHydrated),[V,F]=(0,r.useState)(null),{viewports:L,activeViewportIndex:j}=E;let B,$;if(y.registeredExtensionIds.includes(S)){const e=y.getModuleEntry("@ohif/extension-measurement-tracking.contextModule.TrackedMeasurementsContext"),t=(0,r.useContext)(e.context);B=t?.[0],$=t?.[1]}$||(B=null,$=(e,t)=>{let{displaySetInstanceUID:n}=t;D.clearMeasurements();const{SeriesInstanceUIDs:s}=(0,d.Z)({servicesManager:g,extensionManager:y},n),a=f.getDisplaySetsForSeries(s[0]);a.length&&v.setDisplaySetsForViewport({viewportIndex:j,displaySetInstanceUIDs:[a[0].displaySetInstanceUID]})});const _=(0,r.useCallback)((e=>{const{measurements:t}=b;(0,c.l2)(V,t.map((e=>e.TrackingUniqueIdentifier)),e)}),[V,k,b]),G=e=>{F(e.detail.element)},H=(0,r.useCallback)((e=>{const{StudyInstanceUID:t,displaySetInstanceUID:n,sopClassUids:s}=b;t&&n&&(s&&s.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),async function(e,t,n){const{measurements:s}=e,a=s[t],{displaySetInstanceUID:r}=a,i=n.getDisplaySetByUID(r),l=i.images[0],o={PatientID:l.PatientID,PatientName:l.PatientName,PatientSex:l.PatientSex,PatientAge:l.PatientAge,SliceThickness:l.SliceThickness,StudyDate:l.StudyDate,SeriesDescription:l.SeriesDescription,SeriesInstanceUID:l.SeriesInstanceUID,SeriesNumber:l.SeriesNumber,ManufacturerModelName:l.ManufacturerModelName,SpacingBetweenSlices:l.SpacingBetweenSlices};return{referencedDisplaySetMetadata:o,referencedDisplaySet:i}}(b,e,f).then((t=>{let{referencedDisplaySet:n,referencedDisplaySetMetadata:s}=t;if(M(e),C(n),O(s),n.displaySetInstanceUID===N?.displaySetInstanceUID){const{measurements:t}=b,n=h.getViewportInfoByIndex(a),s=h.getCornerstoneViewport(n.getViewportId()),r=s.getImageIds().indexOf(t[e].imageId);-1!==r&&s.setImageIdIndex(r)}})))}),[n,b,N,a]),J=(0,r.useCallback)((()=>{if(!N)return null;const{component:t}=y.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{measurements:n}=b,s=n[k];if(!s)return null;const a=N.images.findIndex((e=>e.imageId===s.imageId));return r.createElement(t,m({},e,{displaySets:[N],viewportOptions:{toolGroupId:`${I}`},onElementEnabled:G,initialImageIndex:a}))}),[N,a,k]),Y=(0,r.useCallback)((e=>{let t=k;"right"===e?(t++,t>=P&&(t=0)):(t--,t<0&&(t=P-1)),_(t),H(t)}),[k,P,H,_]);(0,r.useEffect)((()=>{const e=f.subscribe(f.EVENTS.DISPLAY_SETS_REMOVED,(e=>{let{displaySetInstanceUIDs:t}=e;const n=L[j];t.includes(n.displaySetInstanceUID)&&v.setDisplaySetsForViewport({viewportIndex:j,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,r.useEffect)((()=>{b.isLoaded||b.load(),A(b.isHydrated);const e=b.measurements.length;U(e)}),[b]),(0,r.useEffect)((()=>{V&&b.isLoaded&&_(k)}),[k,V,_,b]);let Z=B?.context?.trackedSeries?.length>0;(0,r.useEffect)((()=>{Z=B?.context?.trackedSeries?.length>0}),[B]),(0,r.useEffect)((()=>{H(k)}),[n,b]);let q=null;if(!N||!T)return null;t&&t.length&&(q=t.map(((e,t)=>e&&r.cloneElement(e,{viewportIndex:a,key:t}))));const{PatientID:z,PatientName:K,PatientSex:Q,PatientAge:W,SliceThickness:X,ManufacturerModelName:ee,StudyDate:te,SeriesDescription:ne,SpacingBetweenSlices:se,SeriesNumber:ae}=T;return r.createElement(r.Fragment,null,r.createElement(u.uY,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},onArrowsClick:Y,getStatusComponent:()=>function(e){let{srDisplaySet:t,viewportIndex:n,isRehydratable:s,isLocked:a,sendTrackedMeasurementsEvent:l}=e;const o=()=>{l("HYDRATE_SR",{displaySetInstanceUID:t.displaySetInstanceUID,viewportIndex:n})},{t:c}=(0,i.$G)("Common"),d=c("LOAD"),m=s&&!a?3:s&&a?2:1;let p=null,S=null;switch(m){case 1:S=()=>r.createElement(u.JO,{name:"status-alert"}),p=()=>r.createElement("div",null,"This structured report is not compatible",r.createElement("br",null),"with this application.");break;case 2:S=()=>r.createElement(u.JO,{name:"status-locked"}),p=()=>r.createElement("div",null,"This structured report is currently read-only",r.createElement("br",null),"because you are tracking measurements in",r.createElement("br",null),"another viewport.");break;case 3:S=()=>r.createElement(u.JO,{name:"status-untracked"}),p=()=>r.createElement("div",null,`Click ${d} to restore measurements.`)}const I=()=>r.createElement("div",{className:"flex h-6 leading-6 cursor-default text-sm text-white"},r.createElement("div",{className:"min-w-[45px] flex items-center p-1 rounded-l-xl rounded-r bg-customgray-100"},r.createElement(S,null),r.createElement("span",{className:"ml-1"},"SR")),3===m&&r.createElement("div",{className:"ml-1 px-1.5 rounded cursor-pointer hover:text-black bg-primary-main hover:bg-primary-light",onMouseUp:o},d));return r.createElement(r.Fragment,null,p&&r.createElement(u.u,{content:r.createElement(p,null),position:"bottom-left"},r.createElement(I,null)),!p&&r.createElement(I,null))}({srDisplaySet:b,viewportIndex:a,isTracked:!1,isRehydratable:b.isRehydratable,isLocked:Z,sendTrackedMeasurementsEvent:$}),studyData:{label:l,useAltStyling:!0,studyDate:p(te),seriesDescription:ne||"",patientInformation:{patientName:K?o.ZP.utils.formatPN(K.Alphabetic):"",patientSex:Q||"",patientAge:W||"",MRN:z||"",thickness:X?`${X.toFixed(2)}mm`:"",spacing:void 0!==se?`${se.toFixed(2)}mm`:"",scanner:ee||""}}}),r.createElement("div",{className:"relative flex flex-row w-full h-full overflow-hidden"},J(),r.createElement("div",{className:"absolute w-full"},x.viewportIndex===a&&r.createElement(u.P_,{message:x.message,type:x.type,actions:x.actions,onSubmit:x.onSubmit,onOutsideClick:x.onOutsideClick})),q))}g.propTypes={displaySets:a().arrayOf(a().object),viewportIndex:a().number.isRequired,dataSource:a().object,children:a().node,customProps:a().object},g.defaultProps={customProps:{}};const y=g}}]);
//# sourceMappingURL=953.bundle.290af684a367cad58652.js.map
import React, { useState } from 'react';
import { Icon } from '@ohif/ui';
import { useTranslation } from 'react-i18next';

import ContourHelpContent from './ContourHelpContent';
import MaskHelpContent from './MaskHelpContent';
import './ICRHelpContent.styl';

const ICRHelpContent = () => {
  // const { t } = useTranslation('AboutContent');
  const [tabIndex, setTabIndex] = useState(0);

  const getTabClass = idx => {
    return idx === tabIndex ? 'active' : '';
  };

  const renderContourHelpTab = () => {
    return <ContourHelpContent />;
  };

  const renderMaskHelpTab = () => {
    return <MaskHelpContent />;
  };

  const renderTabs = () => {
    switch (tabIndex) {
      case 0:
        return renderContourHelpTab();
      case 1:
        return renderMaskHelpTab();
      default:
        break;
    }
  };

  return (
    <div className="icr-help">
      {/*<div className="icr-help">*/}
      <ul className="nav nav-tabs help-header">
        <li onClick={() => setTabIndex(0)} className={getTabClass(0)}>
          <button>
            <Icon name="xnat-contour" />
            Contour
          </button>
        </li>
        <li onClick={() => setTabIndex(1)} className={getTabClass(1)}>
          <button>
            <Icon name="xnat-mask" />
            Mask
          </button>
        </li>
      </ul>
      <div className="help-container">{renderTabs()}</div>
    </div>
  );
};

export { ICRHelpContent };
export default ICRHelpContent;

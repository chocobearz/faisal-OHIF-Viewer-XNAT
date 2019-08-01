import React from "react";

/**
 * @class FreehandSetNameDialog - A component that allows the user to input
 * metadata for a ROIContour.
 */
export default class FreehandSetNameDialog extends React.Component {
  constructor(props = {}) {
    super(props);

    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
    this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onTextInputKeyDown = this.onTextInputKeyDown.bind(this);

    this._closeDialog = this._closeDialog.bind(this);

    this._roiContourName = this.props.defaultName;
  }

  /**
   * onTextInputChange - A callback that stores the text input on the component.
   *
   * @param  {object} evt The text input event.
   * @returns {null}
   */
  onTextInputChange(evt) {
    this._roiContourName = evt.target.value;
  }

  /**
   * onTextInputKeyDown - If Enter is pressed, confirm.
   *
   * @param  {Object} evt The key down event.
   * @returns {null}
   */
  onTextInputKeyDown(evt) {
    // Check if Enter was pressed.
    if (evt.keyCode === 13) {
      this.onConfirmButtonClick();
    }
  }

  /**
   * onCancelButtonClick - A callback that closes the dialog.
   *
   * @returns {type}  description
   */
  onCancelButtonClick() {
    this._closeDialog();
  }

  /**
   * onConfirmButtonClick - A callback that renames the ROI Contour and closes
   * the dialog.
   *
   * @returns {null}
   */
  onConfirmButtonClick() {
    const name = this._roiContourName;

    if (name) {
      this.props.callback(name);
      this._closeDialog();
    }
  }

  /**
   * _closeDialog - Closes the dialog.
   *
   * @returns {null}
   */
  _closeDialog() {
    const dialog = document.getElementById("freehandSetNameDialog");

    dialog.close();
  }

  render() {
    const { defaultName } = this.props;

    const title =
      defaultName.length === 0 ? "Enter new ROI Name" : "Edit ROI Name";

    return (
      <div>
        <div className="freehand-set-name-horizontal-box">
          <h5>{title}</h5>
          <a
            className="btn btn-sm btn-secondary"
            onClick={this.onCancelButtonClick}
          >
            <i className="fa fa-times-circle fa-2x" />
          </a>
        </div>
        <div className="freehand-set-name-horizontal-box">
          <input
            name="freehandTextInput"
            className="form-themed form-control"
            type="text"
            autoFocus
            defaultValue={defaultName}
            placeholder="Enter ROI name.."
            onChange={this.onTextInputChange}
            onKeyDown={this.onTextInputKeyDown}
          />
          <a
            className="btn btn-sm btn-primary"
            onClick={this.onConfirmButtonClick}
          >
            <i className="fa fa fa-check-circle fa-2x" />
          </a>
        </div>
      </div>
    );
  }
}

function ToolTipWrapper({
  children,
  toolTipTitle,
  customToolTipClass,
  customToolTipText,
}) {
  return (
    <div className={`tooltip ${customToolTipClass}`}>
      <span className={`tooltiptext`}>{toolTipTitle}</span>
      {children}
    </div>
  );
}

export default ToolTipWrapper;

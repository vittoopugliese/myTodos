export const ColumnTitle = ({column}) => {
  const {title, tasksNumber} = column;
  return (
    <div className="title-container">
      <b className="title-text">{title}</b>
      <div className="title-badge">
        <b className="title-badge-number">{tasksNumber}</b>
      </div>
    </div>
  );
};

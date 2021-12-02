function TabLink({ title, active = false }) {
  return (
    <div className={`Tabwrapper ${active ? "activeTab" : ""}`}>
      <span style={{ padding: "1.9rem" }}>{title}</span>
    </div>
  );
}

export default TabLink;

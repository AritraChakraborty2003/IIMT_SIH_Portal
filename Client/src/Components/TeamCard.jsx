const Teamcard = (props) => {
  return (
    <>
      <div className="p-5 w-[75vmin] lg:w-[48vmin]">
        <p>Name:{props.data.teamName}</p>
        <p>Leader:{props.data.teamLeader}</p>
        <p>Department:{props.data.projectDepartment}</p>
        <p>Details:{props.data.projectDetails}</p>
        <p>Members:{props.data.teamMembers}</p>
      </div>
    </>
  );
};
export default Teamcard;

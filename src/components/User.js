export default function Users(props) {
  return (
    <>
      <h1>{props.datas.Fname}</h1>
      <h2>{props.datas.Degree}</h2>
      <h2>{props.datas.Course}</h2>
      <h2>{props.datas.Experience}</h2>
      <h2>{props.datas.Salary}</h2>
    </>
  );
}

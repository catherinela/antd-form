export function BasicForm() {
  return (
    <form action="" method="get" className="basic-form">
      <div>
        <label htmlFor="name">user name: </label>
        <input type="text" name="name" id="name" required></input>
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input type="password" name="password" id="password" required></input>
      </div>
      <div>
        <input type="checkbox" className="checkbox-input"></input>
        <label htmlFor="cached">remember me</label>
      </div>
    </form>
  );
}

export default BasicForm;

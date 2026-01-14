import React, { useActionState } from 'react';
function login(prevState, formData) {
  const name = formData.get("name");
  if (!name) {
    return 'please enter the name';
  }
  return `welcome ${name}`;
}
export default function SubmitForm() {
  const [message, action, pending] = useActionState(login, '');

  return (
    <div>
      <h2>Simple useActionState</h2>
      <form action={action}>
        <input name="name" placeholder="Enter name" />
        <br />
        <br />
        <button disabled={pending}>{pending ? 'Loading...' : 'Submit'}</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
}

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
useActionState is a React hook for handling form submissions.
It returns data, action, and pending.
The action is attached to the form, and React internally calls it with previousState and formData when the form is submitted.
data holds the result of the action, and pending indicates whether submission is in progress.

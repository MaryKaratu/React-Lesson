export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label>Title</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

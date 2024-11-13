export default function InputField({ label, id, type, placeholder, value, onChange }) {
  return (
    <div className='space-y-2'>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        className='w-full p-3 border border-gray-300 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-300'
        onChange={onChange}
      />
    </div>
  );
}
import Link from "next/link";

export default function NotFound() {
  return (
    <main className='text-center'>
      <h1 className='text-3x1'>There was a problem!</h1>
      <p>We could not find the page, you were looking for.</p>
      <p><Link href='/'>Click Here</Link> to go back to Dashboard.</p>
    </main>
  )
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3x1'>There was a problem!</h2>
      <p>We could not find the page, you were looking for.</p>
      <Link href='/tickets'>Click Here</Link>
    </main>
  )
}

export default function Dice({ eye, changeEye = f => f }) {
  return (
    <button onClick={changeEye} disabled={eye === 1 ? true : false} > {eye} </button>
  )
}
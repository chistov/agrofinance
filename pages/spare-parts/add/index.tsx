const Add = () => {

  const onClick = async () => {
    const resp = await fetch('/api/admin/add-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmd: 'select * from'
      }),
    })

    console.log('resp: ', await resp.json())
  }

  return (
    <div>
      <form>
        <input/>
        <button onClick={() => onClick()}>Click me</button>
      </form>
    </div>
  )
}

export default Add;

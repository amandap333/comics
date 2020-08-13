import useSWR from 'swr'
import ComicData from '../components/comic-data'

const fetcher = (url) => fetch(url).then((r) => r.json())

const Main = () => {
  const { data, error } = useSWR('/api/comics', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>Todds Comics</h1>
      <div>
        <div>
          <h4>name</h4>
          <h4>variant</h4>
          <h4>price</h4>
        </div>
        {data ? (
          data.map((d) => (
            <ComicData
              key={d.ref['@ref'].id}
              id={d.ref['@ref'].id}
              comicName={d.data.comicName}
              price={d.data.price}
              variant={d.data.variant}
            />
          ))
        ) : (
          <>
            <ComicData loading />
            <ComicData loading />
            <ComicData loading />
          </>
        )}
      </div>
    </div>
  )
}

export default Main

import Link from 'next/link'

const ComicData = ({
  id,
  comicName,
  variant,
  price
}) => (
  <div>
    <p>
      <Link href="/comics/[id]" as={`/comics/${id}`}>
        <a>
          {comicName} {variant}
        </a>
      </Link>
    </p>
    <p>{price}</p>
  </div>
)

export default ComicData
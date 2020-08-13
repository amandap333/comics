import { serverClient } from '../../../utils/server'
import { query as q } from 'faunadb'

module.exports = async (req, res) => {
  try {
    const comics = await serverClient.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('all_comics')
          )
        ),
        ref => q.Get(ref)
      )
    )
    res.status(200).json(comics.data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
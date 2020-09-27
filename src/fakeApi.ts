import Faker from 'faker'

export type T_Post = {
  title: string
  author: string
  postedOn: string | Date
  body: string
  id: string | number
}

export const getPosts = (
  howMany: number,
  loadTimeMs: number,
): Promise<T_Post[]> =>
  new Promise((resolve) => {
    // Generate the posts
    const posts: T_Post[] = []
    for (let i = 0; i < howMany; i++) {
      posts.push({
        title: Faker.hacker.phrase(),
        author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        postedOn: Faker.date.recent(30),
        body: Faker.lorem.paragraphs(2),
        id: i,
      })
    }
    setTimeout(() => {
      resolve(posts)
    }, loadTimeMs)
  })

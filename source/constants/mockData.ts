import { IPost } from "../interfaces/IPost";

export const posts: Array<IPost> = [
  {
    _id: 1,
    content: `
      Mussum Ipsum, cacilds vidis litro abertis.
      Mauris nec dolor in eros commodo tempor.
      Aenean aliquam molestie leo, vitae iaculis nisl.
      Atirei o pau no gatis, per gatis num morreus.
      Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
      Praesent vel viverra nisi.
      Mauris aliquet nunc non turpis scelerisque, eget.
    `,
    title: 'First Post',
    createAt: '01-01-2023 10:15',
    updateAt: '01-01-2023 11:24' 
  },
  {
    _id: 2,
    content: `
      Mussum Ipsum, cacilds vidis litro abertis.
      Mauris nec dolor in eros commodo tempor.
      Aenean aliquam molestie leo, vitae iaculis nisl.
      Atirei o pau no gatis, per gatis num morreus.
      Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
      Praesent vel viverra nisi.
      Mauris aliquet nunc non turpis scelerisque, eget.
    `,
    title: 'Second Post',
    createAt: '02-01-2023 10:15'
  },
  {
    _id: 3,
    content: `
      Mussum Ipsum, cacilds vidis litro abertis.
      Mauris nec dolor in eros commodo tempor.
      Aenean aliquam molestie leo, vitae iaculis nisl.
      Atirei o pau no gatis, per gatis num morreus.
      Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
      Praesent vel viverra nisi.
      Mauris aliquet nunc non turpis scelerisque, eget.
    `,
    title: 'Third Post',
    createAt: '03-01-2023 10:15'
  }
]

export const primaryColor = '#f2d2f2'
/**
  @hash,图片的hash值
  @base,url域名部分
  @query,查询字符串部分
  @return 返回完整的url
*/
export default function (hash, base, query) {
  // 获取文件名
  let filename = hash.slice(0, 1) + '/' + hash.slice(1, 3) + '/' + hash.slice(3)
  // 使用正则获取图片的后缀名
  let matches = filename.match(/png|jpeg|jpg$/)
  return `${base}/${filename}.${matches[0]}?${query}`
}

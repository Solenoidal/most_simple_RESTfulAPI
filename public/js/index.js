/* eslint-disable require-jsdoc */
$$$(() => {
  $('get').on('click', async () => {
    await log('getボタンが押されました');
    await getData();
  });
});
async function getData() {
  try {
    const res = await axios.get('http://localhost:3000/api');
    console.log('Getリクエストが送信されました');
    const { name, email, twitter, github } = res.data;
    // console.log('name: ', name);
    // console.log('email: ', email);
    // console.log('github: ', github);
    // console.log('twitter: ', twitter);
    console.table(res.data);
    $('main').setHtml(`
    ${name}<br />
    ${email}<br />
    ${twitter}<br />
    ${github}<br />
    `);
  } catch (error) {
    console.error(error);
  }
}

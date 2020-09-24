export default {
  async sayHello({ username }) {
    console.log('===>>> sayHello req: ', { username });
    return { data: `你好，${username}！` };
  }
};

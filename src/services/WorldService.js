export default {
  async goWorld({ destination }) {
    console.log('===>>> goWorld req: ', { destination });
    return { data: `世界那么大，我想去【${destination}】走走！` };
  }
};

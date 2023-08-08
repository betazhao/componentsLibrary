import { defineComponent } from "vue";
import { zhwProps } from "./types";

const NAME = "ylkj-zhw";

export default defineComponent({
  name: NAME,
  props: zhwProps,
  setup(props, context) {
    console.log(props, context);
    return () => (
      <div class={NAME}>
        <el-button>测试npm更新</el-button>
        <div>ylkj-zhw进行测试1.0.6</div>
      </div>
    );
  },
});

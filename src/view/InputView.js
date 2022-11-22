const MissionUtils = require("@woowacourse/mission-utils");
const { DIRECTION, COMMAND } = require("../utils/constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(`다리의 길이를 입력해주세요.\n`, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(
      `이동할 칸을 선택해주세요. (위: ${DIRECTION.TO_UPPER}, 아래: ${DIRECTION.TO_LOWER})\n`,
      callback
    );
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    MissionUtils.Console.readLine(
      `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.RETRY}, 종료: ${COMMAND.QUIT})\n`,
      callback
    );
  },
};

module.exports = InputView;

import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/black-bot.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  return `https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model) {
    var roleUrl =
      "https://genshin-1301046789.cos.ap-nanjing.myqcloud.com/avatar/chat-role-5.jpg";
    return (
      <div className="no-dark">
        {props.model?.startsWith("gpt-4") ? (
          <BlackBotIcon className="user-avatar" />
        ) : (
          // <BotIcon className="user-avatar" />
          <div
            style={{
              width: "30px",
              border: "1px solid rgb(222, 222, 222)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img style={{ width: "100%", display: "block" }} src={roleUrl} />
          </div>
        )}
      </div>
    );
  }

  if ("1f603" === props.avatar) {
    var roleUrl =
      "https://genshin-1301046789.cos.ap-nanjing.myqcloud.com/avatar/chat-role-0.jpg";
    return (
      <div
        style={{
          width: "30px",
          border: "1px solid rgb(222, 222, 222)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img style={{ width: "100%", display: "block" }} src={roleUrl} />
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}

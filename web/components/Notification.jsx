import { notification } from 'antd'

export default function Notification(type, message, description) {
  notification.destroy();
  notification[type]({
    message,
    description
  })
}

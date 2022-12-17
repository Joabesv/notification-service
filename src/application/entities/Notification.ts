// react like
export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private readonly props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error('content needs to have at least 6 letters');
    }

    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}

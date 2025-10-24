import {
  DockerLogo,
  DotNetlogo,
  KafkaLogo,
  KubLogo,
  MongoDbLogo,
} from "../components/atoms/logos/logos";

export const StackData = [
  {
    logo: <DotNetlogo />,
    name: ".Net",
  },
  {
    logo: <KafkaLogo />,
    name: "Kafka",
  },
  {
    logo: <MongoDbLogo />,
    name: "MongoDb",
  },
  {
    logo: <DockerLogo />,
    name: "Docker",
  },
  {
    logo: <KubLogo />,
    name: "Kubernetes",
  },
];

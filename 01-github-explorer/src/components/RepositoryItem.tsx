import { Repository } from "./types";

type RepositoryItemProps = {
  repository: Repository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}

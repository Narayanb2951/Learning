import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
  sleep(5);

  http.get('https://test.k6.io/contacts.php');
  http.get('https://test.k6.io/flip_coin.php');
}

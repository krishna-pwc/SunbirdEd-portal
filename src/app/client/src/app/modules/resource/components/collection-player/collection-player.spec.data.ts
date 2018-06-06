import { CollectionHierarchyAPI } from '@sunbird/core';

export const CollectionHierarchyGetMockResponse = {
  'id': 'ekstep.learning.content.hierarchy',
  'ver': '2.0',
  'ts': '2018-05-07T07:20:27ZZ',
  'params': {
      'resmsgid': '0ea98baa-5a9e-49fd-a568-7967bc1e0ab8',
      'msgid': null,
      'err': null,
      'status': 'successful',
      'errmsg': null
  },
  'responseCode': 'OK',
  'result': {
      'content': {
          'code': 'org.ekstep.textbook.1498025274',
          'notes': '',
          'keywords': [
              'numbers',
              'math'
          ],
          'subject': 'Mathematics',
          'channel': 'in.ekstep',
          'description': 'Math',
          'edition': '',
          'language': [
              'English'
          ],
          'mimeType': 'application/vnd.ekstep.content-collection',
          'medium': 'English',
          'idealScreenSize': 'normal',
          'createdOn': '2017-06-21T06:09:37.770+0000',
          'appIcon': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content
          /do_112270512453271552134/artifact/61ebc74bd0eecff1011408d4aaa8790b_1497865290002.jpeg`,
          'gradeLevel': [
              'Class 4'
          ],
          'collections': [],
          'children': [
              {
                  'pageNumber': '1',
                  'code': 'org.ekstep.textbook.1498026396',
                  'notes': '',
                  'keywords': [
                      'integers',
                      'numbers'
                  ],
                  'channel': 'in.ekstep',
                  'description': 'Numbers and Integers',
                  'language': [
                      'English'
                  ],
                  'mimeType': 'application/vnd.ekstep.content-collection',
                  'idealScreenSize': 'normal',
                  'createdOn': '2017-06-21T06:28:19.453+0000',
                  'collections': [
                      {
                          'identifier': 'do_112271823894691840181',
                          'name': 'Math for dummies',
                          'objectType': 'Content',
                          'relation': 'hasSequenceMember',
                          'description': 'Math',
                          'index': null,
                          'status': null,
                          'depth': null,
                          'mimeType': null,
                          'visibility': null,
                          'compatibilityLevel': null
                      }
                  ],
                  'children': [
                      {
                          'pageNumber': '',
                          'code': 'org.ekstep.textbook.1498026431',
                          'notes': '',
                          'keywords': [
                              'Numbers'
                          ],
                          'channel': 'in.ekstep',
                          'description': 'Another unit',
                          'language': [
                              'English'
                          ],
                          'mimeType': 'application/vnd.ekstep.content-collection',
                          'idealScreenSize': 'normal',
                          'createdOn': '2017-06-21T06:28:54.300+0000',
                          'collections': [
                              {
                                  'identifier': 'do_112271833083518976186',
                                  'name': 'Numbers and Integers',
                                  'objectType': 'Content',
                                  'relation': 'hasSequenceMember',
                                  'description': 'Numbers and Integers',
                                  'index': null,
                                  'status': null,
                                  'depth': null,
                                  'mimeType': null,
                                  'visibility': null,
                                  'compatibilityLevel': null
                              }
                          ],
                          'children': [
                              {
                                  'channel': 'in.ekstep',
                                  'downloadUrl': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/
                                  ecar_files/domain_44689_1463061499728.ecar`,
                                  'language': [
                                      'English'
                                  ],
                                  'source': 'EkStep',
                                  'mimeType': 'application/vnd.ekstep.ecml-archive',
                                  'gradeLevel': [
                                      'Kindergarten'
                                  ],
                                  'collections': [
                                      {
                                          'identifier': 'do_11226278922323558419',
                                          'name': 't1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 't1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262789740208128110',
                                          'name': 't1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 't1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11225942389930393618',
                                          'name': 'qwqw',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'wewer',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122634508503449601118',
                                          'name': 'Test Collectionasdzdf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'ddffddfdsdsd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260726781968384185',
                                          'name': 'dfc',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122634627915120641123',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11227540095945932813',
                                          'name': 'one',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dwde',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262564566728704143',
                                          'name': 'A new collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11227540117639168014',
                                          'name': 'one',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262560555712512142',
                                          'name': 'col changed',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dfdsfsf',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262801123581952121',
                                          'name': 'asdsa',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'zfdzscfs',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226118706967347217',
                                          'name': 'Demo collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122677059384279041177',
                                          'name': 'Copied From Collection  test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Collection  test Collection  test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261207346102272111',
                                          'name': 'zfc',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sdafa',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262109047201792172',
                                          'name': 'zxzx',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'zxzxzx',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112275592800460800112',
                                          'name': 'Collaborate',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dsf',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112271833368985600187',
                                          'name': 'Another unit',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Another unit',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112276071067320320114',
                                          'name': 'collaborator test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'ddddd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261211257282560114',
                                          'name': 'asds',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdasd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112270440302419968121',
                                          'name': 'tbunit1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'tbunit1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262105858768896169',
                                          'name': 'Test collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Demo desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260435489579008112',
                                          'name': 'Test Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262857409306624143',
                                          'name': 'dev 11',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'egterg',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122288462108835841137',
                                          'name': 'fgfg',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'fgfg',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112227394331156480131',
                                          'name': 'Look',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Look',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122677826183086081200',
                                          'name': 'asasa',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asasas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112272730998472704164',
                                          'name': 'DF',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dsfd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112250667523227648120',
                                          'name': 'Book Unit 2',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Lorem Ipsum',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112276160444874752119',
                                          'name': 'sdfsf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sdfdfsf',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262889157713920151',
                                          'name': 'Talon Jennings',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Hic voluptatibus facere quod quas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11227400773077401611',
                                          'name': 'Textbook test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263685398978560173',
                                          'name': 'Telemetry conetnt testwer',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122677005303889921173',
                                          'name': 'Test Collection for 4682',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226216741928960017',
                                          'name': 'Test Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226217207398400018',
                                          'name': 'Test collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc changed',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11222795997970432015',
                                          'name': 'test1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test1\r\ntest2\r\ntest3',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263568821518336124',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226848434678169614',
                                          'name': 'Test for 5037',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test for 5037',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226350291512524813',
                                          'name': 'Lacy Tate',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'In sint optio ut et cum quo inventore inventore elit in aute amet',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262175085658112111',
                                          'name': 'asd',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112270430924152832117',
                                          'name': 'Test 1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112266258093129728133',
                                          'name': 'Test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'testd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122677420518604801188',
                                          'name': 'tju',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262178780717056113',
                                          'name': 'sdfds',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dsf',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262645067694080137',
                                          'name': 'Test Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test Collection',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262179865731072114',
                                          'name': 'Testing Collection changed',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc changed',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260658334490624154',
                                          'name': 'xdcf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sxdc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112247153019551744110',
                                          'name': 'Test111222qqq111111',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112227983705489408110',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test1\r\ntest2\r\ntest3',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263603039125504133',
                                          'name': 'Test collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226843940287283212',
                                          'name': 'dsf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'hh',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260658618114048155',
                                          'name': 'asdxas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdx',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262181913116672116',
                                          'name': 'A new collection changed',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261344773414912124',
                                          'name': 'test1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260659380420608156',
                                          'name': 'asds',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262978605228032164',
                                          'name': 'New Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'New Collection',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263608981118976134',
                                          'name': 'asda',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262985160507392165',
                                          'name': 'Peacock collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Peacock collection',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260660510769152157',
                                          'name': 'asdas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263610507329536136',
                                          'name': 'sadX',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdx',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260661151129600158',
                                          'name': 'asdas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asda',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263052447916032168',
                                          'name': 'What is Lorem Ipsum?',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Lorem Ipsum',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261279279751168124',
                                          'name': 'test save',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261951797764096132',
                                          'name': 'sdad',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262200417116160128',
                                          'name': 'a new collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112228037339922432128',
                                          'name': 'Lesson 1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Lesson 1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260664620793856161',
                                          'name': 'jh',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'jhvasjdv',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260664167030784160',
                                          'name': 'jh',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'jhvasjdv',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263620828364800142',
                                          'name': 'asdas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261362925240320133',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112240719117352960158',
                                          'name': 'Test unite',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test unite',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112271829014921216184',
                                          'name': '111111111',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '1111111111111',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260688635428864166',
                                          'name': 'dfdsf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sad',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261987840606208140',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261367069802496137',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'test',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263302684925952177',
                                          'name': 'test TM',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'rest',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263623299293184148',
                                          'name': '569 - Book - 2 - Unit 1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '569 - Book - 2 - Unit 1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263270960136192174',
                                          'name': 'Test collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdasd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260706568552448175',
                                          'name': 'Unit 1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Unit 1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262791345848320113',
                                          'name': 't111',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': '',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122265087374295041357',
                                          'name': 'Unit1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Unit1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112248642244050944135',
                                          'name': 'sfsdf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sdfsdf',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112271120592207872147',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dasdad',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263372618743808195',
                                          'name': 'Jacob Johnston',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Labore praesentium ',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112248643060842496136',
                                          'name': 'fgdfgd',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dfgdfgd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122670720153927681142',
                                          'name': 'Test_QA_Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test_QA',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122670811949875201148',
                                          'name': 'Test_QA_Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test_QA',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261380170956800145',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'jmhjkh',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122676480641515521161',
                                          'name': 'asas    vvvvvccccccccx',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226271680829030419',
                                          'name': 'Test collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122670822227804161149',
                                          'name': 'Test_QA_Collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Test_QA',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112263628903555072153',
                                          'name': 'Create New Collection Save',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Create New Collection\r\nSave',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260715994791936180',
                                          'name': 'asdas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112261413314904064147',
                                          'name': 'Test collection',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'example',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122634319810314241109',
                                          'name': 'test check',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260716491137024181',
                                          'name': 'asdas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asda',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226351783387136016',
                                          'name': 'Lesson 9th-june',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sadsdfdsfdsfdsfg',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_1122634325139456001110',
                                          'name': 'asdfsa',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260718432296960183',
                                          'name': 'asdsc',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'dsfcas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112272570555154432124',
                                          'name': 'Chapter 1.1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'deep learning',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260721156366336184',
                                          'name': 'zdfcdz',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asds',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226144967349043212',
                                          'name': 'dsdd',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sD',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260726997778432186',
                                          'name': 'asdas',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'sadas',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226145139256524813',
                                          'name': 'dasf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112262058608869376157',
                                          'name': 'test',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asdsa',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226145344757760014',
                                          'name': 'dsf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260728555323392187',
                                          'name': 'asdfsa',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asds',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11226145546131865615',
                                          'name': 'sad',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_11225942280289484817',
                                          'name': 'fhg',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'fdg',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112260730062856192188',
                                          'name': 'dsf',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'asd',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      }
                                  ],
                                  'children': [],
                                  'appId': 'ekstep_portal',
                                  'usesContent': [],
                                  'contentEncoding': 'gzip',
                                  'artifactUrl': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content
                                  /1463061497846_domain_44689.zip`,
                                  'sYS_INTERNAL_LAST_UPDATED_ON': '2017-06-09T05:23:52.630+0000',
                                  'contentType': 'Story',
                                  'item_sets': [],
                                  'lastUpdatedBy': '387',
                                  'identifier': 'domain_44689',
                                  'audience': [
                                      'Learner'
                                  ],
                                  'visibility': 'Default',
                                  'consumerId': 'f6878ac4-e9c9-4bc4-80be-298c5a73b447',
                                  'portalOwner': 'EkStep',
                                  'index': 2,
                                  'mediaType': 'content',
                                  'ageGroup': [
                                      '5-6'
                                  ],
                                  'osId': 'org.ekstep.quiz.app',
                                  'license': 'Creative Commons Attribution (CC BY)',
                                  'size': 3394391,
                                  'lastPublishedOn': '2016-05-12T13:58:20.311+0000',
                                  'concepts': [],
                                  'domain': [
                                      'numeracy'
                                  ],
                                  'name': 'asd',
                                  'publisher': 'EkStep',
                                  'status': 'Retired',
                                  'template': 'domain_38441',
                                  'code': 'org.ekstep.numeracy.story.1201',
                                  'methods': [],
                                  'imageCredits': [
                                      'ekstep'
                                  ],
                                  'description': 'zxc',
                                  'lastFlaggedOn': '2017-06-29T10:16:57.774+0000',
                                  'flaggedBy': [
                                      '387'
                                  ],
                                  'idealScreenSize': 'normal',
                                  'createdOn': '2017-09-12T09:13:13.397+0000',
                                  'lastPublishDate': '2016-05-12T13:58:20.311+0000',
                                  'contentDisposition': 'inline',
                                  'lastUpdatedOn': '2017-08-24T06:38:25.124+0000',
                                  'owner': 'EkStep',
                                  'os': [
                                      'All'
                                  ],
                                  'flagReasons': [
                                      'Privacy violation'
                                  ],
                                  'soundCredits': [
                                      'ekstep'
                                  ],
                                  'libraries': [],
                                  'pkgVersion': 1,
                                  'versionKey': '1503556705124',
                                  'idealScreenDensity': 'hdpi',
                                  's3Key': 'ecar_files/domain_44689_1463061499728.ecar',
                                  'createdBy': 'EkStep',
                                  'compatibilityLevel': 1,
                                  'developer': 'EkStep'
                              },
                              {
                                  'previewUrl': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com
                                  /content/ecml/do_112270494168555520130-latest`,
                                  'subject': 'Mathematics',
                                  'channel': 'in.ekstep',
                                  'downloadUrl': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com
                                  /ecar_files/do_112270494168555520130/assessment-stats_1497863935009_do_112270494168555520130_1.0.ecar`,
                                  'language': [
                                      'English'
                                  ],
                                  'variants': {
                                      'spine': {
                                          'ecarUrl': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com
                                          /ecar_files/do_112270494168555520130/
                                          assessment-stats_1497863935123_do_112270494168555520130_1.0_spine.ecar`,
                                          'size': 40128
                                      }
                                  },
                                  'source': '',
                                  'mimeType': 'application/vnd.ekstep.ecml-archive',
                                  'gradeLevel': [
                                      'Grade 1',
                                      'Grade 2'
                                  ],
                                  'appIcon': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_112270494168555520130
                                  /artifact/fab2e7a6eb4386eea413fb0ac3042a33_1497608491799.thumb.jpeg`,
                                  'collections': [
                                      {
                                          'identifier': 'do_112272631861288960132',
                                          'name': 'Chapter 1.1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'geometry',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112270526438776832135',
                                          'name': 'Demo collection nested',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'desc',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112292900889124864112',
                                          'name': 'Chapter 1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Chapter 1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112271833368985600187',
                                          'name': 'Another unit',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Another unit',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112233010611118080112',
                                          'name': 'Place Value',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'A number is formed by grouping the digits together',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'do_112272659156082688143',
                                          'name': 'Chapter 2.1',
                                          'objectType': 'Content',
                                          'relation': 'hasSequenceMember',
                                          'description': 'Chapter 2.1',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      }
                                  ],
                                  'appId': 'dev.ekstep.in',
                                  'contentEncoding': 'gzip',
                                  'artifactUrl': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content
                                  /do_112270494168555520130/artifact/1497863933923_do_112270494168555520130.zip`,
                                  'contentType': 'Story',
                                  'sYS_INTERNAL_LAST_UPDATED_ON': '2017-06-19T09:18:55.667+0000',
                                  'lastUpdatedBy': '412',
                                  'identifier': 'do_112270494168555520130',
                                  'audience': [
                                      'Learner'
                                  ],
                                  'visibility': 'Default',
                                  'consumerId': 'f6878ac4-e9c9-4bc4-80be-298c5a73b447',
                                  'index': 3,
                                  'mediaType': 'content',
                                  'ageGroup': [
                                      '6-7',
                                      '5-6'
                                  ],
                                  'osId': 'org.ekstep.quiz.app',
                                  'lastPublishedBy': '181',
                                  'prevState': 'Review',
                                  'size': 157030,
                                  'lastPublishedOn': '2017-06-19T09:18:55.007+0000',
                                  'concepts': [
                                      {
                                          'identifier': 'C25',
                                          'name': 'Money',
                                          'objectType': 'Concept',
                                          'relation': 'associatedTo',
                                          'description': 'Money\r\nIdentify and convert money',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      },
                                      {
                                          'identifier': 'C21',
                                          'name': 'Length',
                                          'objectType': 'Concept',
                                          'relation': 'associatedTo',
                                          'description': 'Length\nMeasurement with non standard metric',
                                          'index': null,
                                          'status': null,
                                          'depth': null,
                                          'mimeType': null,
                                          'visibility': null,
                                          'compatibilityLevel': null
                                      }
                                  ],
                                  'domain': [
                                      'numeracy'
                                  ],
                                  'name': 'Assessment stats',
                                  'publisher': '',
                                  'attributions': [
                                      ''
                                  ],
                                  'status': 'Live',
                                  'template': '',
                                  'code': 'org.ekstep.numeracy.worksheet.5284',
                                  'description': 'This is to test assessment data',
                                  'lastFlaggedOn': '2017-06-20T09:38:14.435+0000',
                                  'medium': 'English',
                                  'flaggedBy': [
                                      '412'
                                  ],
                                  'posterImage': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content
                                  /do_1122684087626465281245/artifact/fab2e7a6eb4386eea413fb0ac3042a33_1497608491799.jpeg`,
                                  'idealScreenSize': 'normal',
                                  'createdOn': '2017-06-19T09:04:17.685+0000',
                                  'contentDisposition': 'inline',
                                  'lastUpdatedOn': '2017-06-20T10:33:22.180+0000',
                                  'owner': 'Nidhi',
                                  'creator': 'Nidhi Potdar',
                                  'os': [
                                      'All'
                                  ],
                                  'pkgVersion': 1,
                                  'versionKey': '1497954802180',
                                  'idealScreenDensity': 'hdpi',
                                  's3Key': `ecar_files/do_112270494168555520130
                                  /assessment-stats_1497863935009_do_112270494168555520130_1.0.ecar`,
                                  'createdBy': '506',
                                  'compatibilityLevel': 2
                              }
                          ],
                          'appId': 'dev.ekstep.in',
                          'contentDisposition': 'inline',
                          'contentEncoding': 'gzip',
                          'lastUpdatedOn': '2017-06-21T06:45:50.285+0000',
                          'contentType': 'TextBookUnit',
                          'identifier': 'do_112271833368985600187',
                          'audience': [
                              'Learner'
                          ],
                          'visibility': 'Parent',
                          'os': [
                              'All'
                          ],
                          'consumerId': 'f6878ac4-e9c9-4bc4-80be-298c5a73b447',
                          'index': 3,
                          'mediaType': 'content',
                          'osId': 'org.ekstep.quiz.app',
                          'versionKey': '1498027550285',
                          'tags': [
                              'Numbers'
                          ],
                          'idealScreenDensity': 'hdpi',
                          'framework': 'NCF',
                          'concepts': [
                              {
                                  'identifier': 'C21',
                                  'name': 'Length',
                                  'objectType': 'Concept',
                                  'relation': 'associatedTo',
                                  'description': 'Length\nMeasurement with non standard metric, ',
                                  'index': null,
                                  'status': null,
                                  'depth': null,
                                  'mimeType': null,
                                  'visibility': null,
                                  'compatibilityLevel': null
                              }
                          ],
                          'compatibilityLevel': 1,
                          'name': 'Another unit',
                          'status': 'Draft'
                      }
                  ],
                  'appId': 'dev.ekstep.in',
                  'contentDisposition': 'inline',
                  'contentEncoding': 'gzip',
                  'lastUpdatedOn': '2017-06-21T06:45:49.113+0000',
                  'contentType': 'TextBookUnit',
                  'identifier': 'do_112271833083518976186',
                  'audience': [
                      'Learner'
                  ],
                  'visibility': 'Parent',
                  'os': [
                      'All'
                  ],
                  'consumerId': 'f6878ac4-e9c9-4bc4-80be-298c5a73b447',
                  'index': 1,
                  'mediaType': 'content',
                  'osId': 'org.ekstep.quiz.app',
                  'versionKey': '1498027549113',
                  'tags': [
                      'integers',
                      'numbers'
                  ],
                  'idealScreenDensity': 'hdpi',
                  'framework': 'NCF',
                  'concepts': [
                      {
                          'identifier': 'C21',
                          'name': 'Length',
                          'objectType': 'Concept',
                          'relation': 'associatedTo',
                          'description': 'Length\nMeasurement with non standard metric, ',
                          'index': null,
                          'status': null,
                          'depth': null,
                          'mimeType': null,
                          'visibility': null,
                          'compatibilityLevel': null
                      }
                  ],
                  'compatibilityLevel': 1,
                  'name': 'Numbers and Integers',
                  'status': 'Draft'
              }
          ],
          'appId': 'dev.ekstep.in',
          'publication': 'ekstep',
          'contentDisposition': 'inline',
          'contentEncoding': 'gzip',
          'lastUpdatedOn': '2017-06-21T06:45:49.839+0000',
          'contentType': 'TextBook',
          'owner': 'Sunil',
          'lastUpdatedBy': '398',
          'identifier': 'do_112271823894691840181',
          'audience': [
              'Instructor'
          ],
          'visibility': 'Default',
          'os': [
              'All'
          ],
          'consumerId': 'f6878ac4-e9c9-4bc4-80be-298c5a73b447',
          'mediaType': 'content',
          'osId': 'org.ekstep.quiz.app',
          'versionKey': '1498027549839',
          'tags': [
              'numbers',
              'math'
          ],
          'idealScreenDensity': 'hdpi',
          'framework': 'NCF',
          'createdBy': '398',
          'compatibilityLevel': 1,
          'name': 'Math for dummies',
          'usedByContent': [],
          'board': 'NCERT',
          'status': 'Draft'
      }
  }
};

export const ExtUrlContentResponse = {
    playerConfig: {
        config: {
            apislug: '/action',
            host: '',
            overlay: {
                'showUser': false
            },
            repos: [
                '/content-plugins/renderer'
            ],
            showEndPage: false,
            showStartPage: true
        },
        context: {
            app: [
                'b00bc992ef25f1a9a8d63291e20efc8d'
            ],
            channel: 'b00bc992ef25f1a9a8d63291e20efc8d',
            contentId: 'do_1125110622654464001294',
            dims: [
                '0123653943740170242',
                'ORG_001',
                'b00bc992ef25f1a9a8d63291e20efc8d'
            ],
            mode: 'play',
            partner: [],
            pdata: {
                id: 'dev.sunbird.portal', ver: '1.7', pid: 'sunbird-portal'
            },
            sid: '5iLvp8pc6GGOfr28zHFv3s1tsTaGDwBj',
            tags: [
                'b00bc992ef25f1a9a8d63291e20efc8d'
            ],
            uid: '874ed8a5-782e-4f6c-8f36-e0288455901e'
        },
        metadata: {
            appIcon: `https: //ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1125110622654464001294/artifact/
        62f05664348aeff61aa195d0dc3caba5_1527228627157.thumb.jpg`,
            artifactUrl: 'http: //www.dailymotion.com/video/x175su1',
            audience: [
                'Learner'
            ],
            board: 'CBSE',
            code: 'a5392316-994b-456c-b14b-2d11316c843a',
            collections: [],
            concepts: [],
            contentType: 'Resource',
            createdBy: '63b0870c-f370-4f96-842d-f6a7fa2db1df',
            createdOn: '2018-05-25T06: 21: 20.450+0000',
            creator: 'sunbird Test',
            framework: 'NCF',
            gradeLevel: [
                'Class 1'
            ],
            identifier: 'do_1125110622654464001294',
            language: [
                'English'
            ],
            languageCode: 'en',
            lastUpdatedOn: '2018-05-25T06: 25: 47.532+0000',
            mediaType: 'content',
            medium: 'Hindi',
            mimeType: 'text/x-url',
            name: 'A5 ext link',
            osId: 'org.ekstep.quiz.app',
            resourceType: 'Practice',
            status: 'Live',
            subject: 'English',
            versionKey: '1527229547532',
            visibility: 'Default'
        }
    },
    resourceBundle: {
        'messages': {
            'imsg': {
                'm0034': 'As the content is from an external source, it will be opened in a new tab.'
            },
            'stmsg': { 'm0009': 'Unable to play, please try again or close' }
        }
    }
};

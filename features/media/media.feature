Feature: Media API test scenarios

  @scenario1
  Scenario: Check that the media endpoint responds successfully and quickly
    Given I send a "get" request to "bbcMediaEndpoint"
    Then I should receive a 200 status code
    And the response time should be under 1000 milliseconds

  @scenario2
  Scenario: Verify that all media items have valid id and segment_type
    Given I send a "get" request to "bbcMediaEndpoint"
    Then each media item should have a non-empty id and segment_type as music

  @scenario3
  Scenario: Verify that all media items have a primary title
    Given I send a "get" request to "bbcMediaEndpoint"
    Then each media item should have a non-empty primary title

  @scenario4
  Scenario: Only one media item should be now playing
    Given I send a "get" request to "bbcMediaEndpoint"
    Then only one media item should have now_playing set to true

  @scenario5
  Scenario: Verify the presence of Date in response headers
    Given I send a "get" request to "bbcMediaEndpoint"
    Then the response headers should include a Date value